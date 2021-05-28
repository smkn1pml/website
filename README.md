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
- [NodeJS](https://nodejs.org/en/download/)

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
   
   - Live development (auto reload)
        ```bash
        bundle exec jekyll serve
        ```
        
   - Build static site
       ```bash
       bundle exec jekyll build
       ```

## Additional Information

### Copyright

Copyright (c) 2021 SMK Negeri 1 Pemalang.

Developed by [Shafima Dev](https://github.com/sProDev).

### License

Code licensed under [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International](LICENSE.md).
