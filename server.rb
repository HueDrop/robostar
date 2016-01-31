require 'sinatra'
require 'sinatra/reloader' if development?
#require_relative 'webscraper.rb'


get '/' do
  erb :"index.html"
end
