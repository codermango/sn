/**
 *
 * Asynchronously loads the component for RentalContentHeader
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
