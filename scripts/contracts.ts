import {parseArgs} from 'node:util'
import {importContractLibrary} from './import-contract-library.mjs'
const {values,positionals}=parseArgs({allowPositionals:true,options:{apply:{type:'boolean'},help:{type:'boolean'}}})
if(values.help||!positionals[0])console.log('npm run contracts:import -- /path/to/portable-export [--apply]\nPreview by default. Importing installs an optional library; it never changes a page or a system binding.')
else console.log(JSON.stringify(await importContractLibrary(positionals[0],undefined,{compact:true,preview:!values.apply}),null,2))
