# deploy-frontend.sh
#!/bin/bash
BUCKET_NAME="your-bucket-name"
DISTRIBUTION_ID="your-cloudfront-distribution-id"
npm run build
aws s3 sync dist/ s3://$BUCKET_NAME/ --delete
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"