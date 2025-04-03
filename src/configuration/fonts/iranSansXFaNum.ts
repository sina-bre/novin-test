import localFont from 'next/font/local';
const iranSansXFaNum = localFont({
  src: [
    {
      path: '../../../public/fonts/IRANSansXFaNum-Thin.woff2',
      weight: '100',
    },
    {
      path: '../../../public/fonts/IRANSansXFaNum-UltraLight.woff2',
      weight: '200',
    },
    {
      path: '../../../public/fonts/IRANSansXFaNum-Light.woff2',
      weight: '300',
    },
    {
      path: '../../../public/fonts/IRANSansXFaNum-Regular.woff2',
      weight: '400',
    },
    {
      path: '../../../public/fonts/IRANSansXFaNum-Medium.woff2',
      weight: '500',
    },
    {
      path: '../../../public/fonts/IRANSansXFaNum-SemiBold.woff2',
      weight: '600',
    },
    {
      path: '../../../public/fonts/IRANSansXFaNum-Bold.woff2',
      weight: '700',
    },
    {
      path: '../../../public/fonts/IRANSansXFaNum-ExtraBold.woff2',
      weight: '800',
    },
    {
      path: '../../../public/fonts/IRANSansXFaNum-Black.woff2',
      weight: '900',
    },
    {
      path: '../../../public/fonts/IRANSansXFaNum-ExtraBlack.woff2',
      weight: '950',
    },
    {
      path: '../../../public/fonts/IRANSansXFaNum-Heavy.woff2',
      weight: '1000',
    },
  ],
  variable: '--font-iranSansXFaNum',
  display: 'swap',
});

export default iranSansXFaNum;