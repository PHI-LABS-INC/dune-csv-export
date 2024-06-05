// If you want to exportAddressAmount, you can change the import statement in src/index.ts
// to import { exportFromDune } from './exportAddressAmount';
import { exportFromDune } from './exportAddress';

exportFromDune()
  .then(() => {
    console.log('Exported data saved to: output/dune_export.csv');
  })
  .catch((error) => {
    console.error('Export from Dune failed:', error);
  });
