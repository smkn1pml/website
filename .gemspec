Gem::Specification.new do |spec|
    spec.authors				= ["Suluh Sulistiawan", "Anton Kurniawan"],
    spec.files					= `git ls-files -z`.split("\x0").select do |f|
        f.match(%r!^(_data|_gallery|_includes|_layouts|_majors|_page|_plugins|_posts|admin|api|articles|assets|pages|ads.txt|CC-BY-NC-ND-4.0.md|LICENSE|README|robots.txt)!i)
    end
    spec.name					= "smkn1pml"
    spec.summary				= "Website of SMK Negeri 1 Pemalang"
    spec.version				= "1.0.2"
    spec.description = <<-EOF
        A static website belonging to SMK Negeri 1 Pemalang
        which was built using Jekyll as a static site generator.
    EOF
    spec.email					= "suluh.webdevelopers@hotmail.com"
    spec.homepage				= "https://github.com/smkn1pml/website"
    spec.license				= "CC-BY-NC-ND-4.0"
    spec.metadata				= {
        "bug_tracker_uri"	=> "https://github.com/smkn1pml/website/issues",
        "documentation_uri"	=> "https://github.com/smkn1pml/website#readme",
        "homepage_uri"		=> "https://smkn1pml.sch.id",
        "source_code_uri"	=> "https://github.com/smkn1pml/website"
    }

    spec.add_runtime_dependency	"jekyll", "~> 4.2.0"
    spec.add_runtime_dependency	"jekyll-feed", "~> 0.15.1"
    spec.add_runtime_dependency	"jekyll-minifier", "~> 0.1.10"
    spec.add_runtime_dependency	"jemoji", ">= 0.12", "< 0.14"
    spec.add_runtime_dependency	"jekyll-sitemap", "~> 1.4.0"
    spec.add_runtime_dependency	"jekyll-archives", "~> 2.2.1"
    spec.add_runtime_dependency	"jekyll-paginate", "~> 1.1.0"
end
