# Github UI Check
You can have the core check that you have ui/index.html installed properly.

```
name 'feather-core'
github_ui_check 'true'
github_link 'https://github.com/FeatherFramework/feather-core'
```

# Github Version Control

You can have feather check if your script is up-to-date by adding the following to your github repo

```
name 'feather-core'
version '1.0.0'
github_version_check 'true'
github_version_type 'release' --OR file
github_link 'https://github.com/FeatherFramework/feather-core'
```

The script will check what current version of the script is downloaded via the Version defined in the fxmanifest.

For Example version '1.0'

## Release(Tag) Based Checks

_How to use [Github Releases](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository)_

> Create a Release and tag with the version number

_Correct: `1.0.0`_

_Wrong: `v1.1.0`_

## Version File Based Checks

> Create a file called `version` with the following contents

```txt
<1.3>
- More awesome updates
<1.1>
- Some awesome updates
<1.0>
- My first Update
```