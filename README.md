# :gear: `setup-hyperledger-fabric-action` 
> Action to setup Hyperledger Fabric CLIs

## About

This action will install the Hyperledger Fabric CLIs (peer, fabric-ca-client etc) and set the path and `FABRIC_CFG_CONFIG` 

## Usage

To install the latest version

```yaml
steps:
- uses: hyperledgendary/setup-hyperledger-fabric-action
```

To setup a specific version:

```yaml
steps:
- uses: hyperledgendary/setup-hyperledger-fabric-action
  with:
    version:
      2.4.7
```

## Inputs
The actions supports the following inputs:

- `version`: The version to install, defaulting to `2.4.7`


## License
[APACAHE-2.0](LICENSE).
