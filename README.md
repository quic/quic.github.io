# quic.github.io

This repository no longer hosts a website. It exists only to forward legacy
`https://quic.github.io/<repo>` URLs for repositories that have moved to the
`qualcomm` GitHub organization.

`https://quic.github.io/` intentionally returns HTTP 404. There is no root
`index.html` and no Jekyll build, so GitHub Pages serves `404.html` for the
root and for any unmatched path. Please do not restore the old landing page.

`404.html` forwards these paths to their new homes:

| Legacy path | New location |
| --- | --- |
| `/tps-location-sdk-native` | `https://qualcomm.github.io/tps-location-sdk-native` |
| `/tps-location-sdk-android` | `https://qualcomm.github.io/tps-location-sdk-android` |
| `/aimet-pages` | `https://qualcomm.github.io/aimet-pages` |
| `/efficient-transformers` | `https://qualcomm.github.io/efficient-transformers` |

Any other path falls through to the 404 page.

Note that project pages such as `https://quic.github.io/startupkits/` are
served by their own repositories in the `quic` organization and are not
affected by this repository.

If you wish to contribute, please review LICENSE.md and CONTRIBUTING.md
