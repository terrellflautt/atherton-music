import { NextRequest, NextResponse } from 'next/server';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';

// Initialize DynamoDB client
const client = new DynamoDBClient({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  },
});

const docClient = DynamoDBDocumentClient.from(client);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }

    // Check if AWS credentials are configured
    if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
      console.warn('AWS credentials not configured. Email would be stored:', email);
      // For development, just return success
      return NextResponse.json({
        success: true,
        message: 'Newsletter subscription received (dev mode)',
      });
    }

    // Create timestamp
    const timestamp = new Date().toISOString();
    const subscriptionId = `${Date.now()}-${Math.random().toString(36).substring(7)}`;

    // Store in DynamoDB
    const command = new PutCommand({
      TableName: process.env.DYNAMODB_NEWSLETTER_TABLE || 'athertonmusic-newsletter',
      Item: {
        id: subscriptionId,
        email: email.toLowerCase().trim(),
        subscribedAt: timestamp,
        source: 'website',
        status: 'active',
      },
    });

    await docClient.send(command);

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter',
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      {
        error: 'Failed to process subscription',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
