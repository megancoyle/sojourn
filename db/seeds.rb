# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Trip.destroy_all
Detail.destroy_all

des_moines = Trip.create!(location: "Des Moines", start: "September 9th, 2016", end: "October 1st, 2016")
cheyenne = Trip.create!(location: "Cheyenne", start: "May 20th, 2016", end: "May 23rd, 2016")
tucson = Trip.create!(location: "Tucson", start: "February 2nd, 2017", end: "February 15th, 2017")

trip_array = Trip.all

Detail.create!(title: "Pick up flowers", trip: tucson)
Detail.create!(title: "Email Mom", trip: tucson)
Detail.create!(title: "Take dog to kennel", trip: cheyenne)
Detail.create!(title: "Shuck corn", trip: des_moines)
