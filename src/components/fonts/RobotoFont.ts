/**
 * Roboto Font
 */
import { Roboto_Slab } from '@next/font/google';

const RobotoSlabFont = Roboto_Slab({
  style: 'normal',
  display: 'swap',
  weight: ['300', '500'],
  subsets: ['latin'],
  preload: true
});

export default RobotoSlabFont;