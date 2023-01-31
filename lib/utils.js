const os = require('os');
const path = require('path');

// arch in [arm, x32, x64...] (https://nodejs.org/api/os.html#os_os_arch)
// return value in [amd64, 386, arm]
function mapArch(arch) {
  const mappings = {
       x64: 'amd64',
       arm: 'arm64'
  };
  return mappings[arch] || arch;
}

// os in [darwin, linux, win32...] (https://nodejs.org/api/os.html#os_os_platform)
// return value in [darwin, linux, windows]
function mapOS(os) {
  const mappings = {
    darwin: 'darwin',
    win32: 'windows',
    linux: 'linux'
  };
  return mappings[os] || os;
}

// https://github.com/hyperledger/fabric/releases/download/v2.5.0-alpha3/hyperledger-fabric-darwin-amd64-2.5.0-alpha3.tar.gz

function getDownloadObject(version) {
  const platform = os.platform();
  const filename = `hyperledger-fabric-${ mapOS(platform) }-${ mapArch(os.arch()) }-${ version }`;
  const extension = 'tar.gz';
  const binPath = platform === 'win32' ? 'bin' : path.join(filename, 'bin');
  const url = `https://github.com/hyperledger/fabric/releases/download/v${ version }/${ filename }.${ extension }`;
  return {
    url,
    binPath
  };
}

module.exports = { getDownloadObject }
