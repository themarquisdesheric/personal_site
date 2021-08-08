# www.whoisyuval.com
A portfolio and personal branding website

NOTE: will need to use the netlify cli to deploy since build image is being deprecated
https://answers.netlify.com/t/please-read-end-of-support-for-trusty-build-image-everything-you-need-to-know/39004

## Running Locally

Clone this repository to your machine and run ```yarn start``` to spin it up.

Make sure you include a valid GitHub access token in a ```.env``` file at the project root: 

```REACT_APP_GITHUB_KEY=secretAccessToken```

Otherwise, the GitHub Dashboard will be hidden by default. 

## Testing

To run unit tests, run ```yarn test```
