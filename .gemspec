Gem::Specification.new do |spec|
    spec.name                       = "ayo-jekyll-theme"
    spec.version                    = "1.0.0"
    spec.authors                    = ["Suluh Sulistiawan"]
    spec.email                      = ["kuy@suluh.my.id"]

    spec.summary                    = "A beautiful school Jekyll theme."
    spec.homepage                   = "https://github.com/smkn1pml/website"
    spec.license                    = "MIT"

    spec.metadata["plugin_type"]    = "theme"

    spec.files                      = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }
    
    spec.add_runtime_dependency     "jekyll", "~> 4.2.0"
    spec.add_runtime_dependency     "jekyll-feed", "~> 0.15.1"
    spec.add_runtime_dependency     "jekyll-minifier", "~> 0.1.10"
    spec.add_runtime_dependency     "jemoji", "~> 0.12.0"
    spec.add_runtime_dependency     "jekyll-sitemap", "~> 1.4.0"
    spec.add_runtime_dependency     "jekyll-archives", "~> 2.2.1"
    spec.add_runtime_dependency     "jekyll-paginate", "~> 1.1.0"
end
