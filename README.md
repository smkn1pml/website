# Main Website

![Website Screenshot](assets/images/screenshot.png)

<p align="center">
    <a href="https://github.com/smkn1pml/website/actions/workflows/publish.yml">
        <img alt="Workflow Status" src="https://github.com/smkn1pml/website/actions/workflows/publish.yml/badge.svg">
    </a>
</p>

Built using Jekyll as a Static Site Generator, GitHub Pages as its CDN, and Netlify CMS as a Content Management System.

## Development

### Requirements

- [Ruby](https://www.ruby-lang.org/en/downloads/)
- [RubyGems](https://rubygems.org/pages/download/)
- [GCC](https://gcc.gnu.org/install/) and [Make](https://www.gnu.org/software/make/)
- [Jekyll](https://jekyllrb.com/docs/installation/)

If you are using [Docker](#docker) then you don't need the requirements listed above.

### Installation

1. Clone this repository
   ```bash
   git clone https://github.com/smkn1pml/website.git
   ```
   
2. Change current directory to this repository folder
   ```bash
   cd website
   ```
   
3. Install dependencies from Gemfile
   ```bash
   bundle install
   ```
   
4. Run Jekyll
   
   - Live development
        ```bash
        bundle exec jekyll serve
        ```
        
   - Build static site
       ```bash
       JEKYLL_ENV=production bundle exec jekyll build
       ```

#### Troubleshooting

If you encounter problems during the installation process, please check the official Jekyll troubleshooting page [here](https://jekyllrb.com/docs/troubleshooting/).

### Docker

- Live development
  ```bash
  docker run --rm --volume="$PWD:/srv/jekyll" --volume="$PWD/vendor/bundle:/usr/local/bundle" --env JEKYLL_ENV=development -p 4000:4000 jekyll/jekyll:4.2.0 jekyll serve
  ```
- Build static site
  ```bash
  docker run --rm --volume="$PWD:/srv/jekyll" --volume="$PWD/vendor/bundle:/usr/local/bundle" --env JEKYLL_ENV=production -p 4000:4000 jekyll/jekyll:4.2.0 jekyll build
  ```

**References**

- [Compile a Jekyll project without installing Jekyll or Ruby by using Docker](https://dev.to/michael/compile-a-jekyll-project-without-installing-jekyll-or-ruby-by-using-docker-4184)
- [Jekyll Docker](https://github.com/envygeeks/jekyll-docker)

## Additional Information

### Copyright

Copyright (c) 2021 SMK Negeri 1 Pemalang.

Developed by [Shafima Dev](https://github.com/sProDev).

### License

Code licensed under [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International](LICENSE.md).
