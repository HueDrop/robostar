require 'sinatra'
require 'sinatra/reloader' if development?
require 'mechanize'
require 'pony'
require 'pry'
require 'httparty'
require 'nokogiri'


#require_relative 'webscraper.rb'
get '/' do
  @post_lyrics = ""
  erb :"index.html"
end

get '/search' do
  art = params[:artist].to_s
  sng = params[:title].to_s
  artist = art.gsub(/\s/,'-')
  title = sng.gsub(/\s/,'-')
  erb :"index.html"
end

post "/search" do
  $lyrics = []
  $art = params[:artist].to_s
  $sng = params[:title].to_s
  artist = $art.gsub(/\s/,'-').downcase
  title = $sng.gsub(/\s/,'-').downcase
  puts title
  puts artist
  page = HTTParty.get('http://genius.com/' + artist + '-' + title + '-lyrics')
  url = ('http://genius.com/' + artist + '-' + title + '-lyrics')
  puts url
  parse_page = Nokogiri::HTML(page)
  parse_page.css('.lyrics').each do |a|
    $post_lyrics = a.text
    $lyrics.push(a.text)
    $lyrics = $lyrics.to_s
    $final_lyrics = $lyrics.gsub! '\n', ' '
    puts $lyrics
  end
  redirect to '/search'
end
