const path = require('path');
const dotenv = require('dotenv');

const result = dotenv.config();

if (result.error) {
  console.warn(
    '\n\n\t💡 It appears that you have not yet configured a .env file.' +
      '\n\t   Please refer to our documentation regarding environment configuration:' +
      '\n\t   https://github.com/Seneca-CDOT/telescope/blob/master/docs/CONTRIBUTING.md\n'
  );

  // Try and use the example env instead if we're not in production
  if (process.env.NODE_ENV !== 'production') {
    const envSamplePath = path.resolve(process.cwd(), path.join('config', 'env.development'));
    console.log(`Attempting to use default env in ${envSamplePath} instead.\n`);
    const secondAttempt = dotenv.config({ path: envSamplePath });
    if (secondAttempt.error) {
      console.warn(`Failed to load ${envSamplePath} env fallback file.`);
    }
  }
}
