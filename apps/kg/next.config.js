//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  reactStrictMode: false,
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'www.gravatar.com',
      'res.cloudinary.com',
      'lh3.googleusercontent.com',
      'picsum.photos',
      'images.unsplash.com',
      'i.ytimg.com',
      'encrypted-tbn0.gstatic.com',
      'lelogama.go-jek.com',
      'logodownload.org',
      'assets.tokopedia.net',
      'seeklogo.com',
      'storage.googleapis.com',
      'media.istockphoto.com',
      'i0.wp.com',
      'dummyimage.com',
    ],
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
