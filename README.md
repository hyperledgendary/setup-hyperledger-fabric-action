# :gear: `setup-hyperledger-fabric-action` 
> Action to setup Hyperledger Fabric CLIs

## About

This action will install the Hyperledger Fabric CLIs (peer, fabric-ca-client etc) and set the path and `FABRIC_CFG_CONFIG`
It's not recommended to load the Fabric docker images in a GHA pipeline. Instead use the Microfab container for FV style testing.

## Usage

To install the latest version

```yaml
steps:
- name: Install the latest patch level of the LTS
  uses: hyperledgendary/setup-hyperledger-fabric-action
```

To setup a specific version:

```yaml
steps:
- name: Install the 2.4.7 release specifically
  uses: hyperledgendary/setup-hyperledger-fabric-action
  with:
    version: 2.4.7

steps:
- name: Installs the last 2.5 development release and pulls docker imagaes
  uses: hyperledgendary/setup-hyperledger-fabric-action
  with:
    version: 2.5.0-beta

steps:
- name: Installs the last 2.5 development release
  uses: hyperledgendary/setup-hyperledger-fabric-action
  with:
    version: 2.5-dev
```

## Inputs
The actions supports the following inputs:

- `version`: The version to install, defaulting to `2.4.7`


## License
[APACAHE-2.0](LICENSE).
