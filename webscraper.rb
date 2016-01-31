require 'pony'
require 'pry'
require 'httparty'
require 'nokogiri'

page = HTTParty.get('http://genius.com/Mac-Miller-Diablo-lyrics')
parse_page = Nokogiri::HTML(page)
parse_page.css('.referent') do |a|
  post_lyrics = a.text
  puts post_lyrics
end
Pry.start(binding)
