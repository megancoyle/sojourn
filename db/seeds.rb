# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

trip_data = JSON.parse(File.read("db/trips_data.json"))
Trip.destroy_all
Trip.create!(trip_data)

plan_data = JSON.parse(File.read("db/plan_data.json"))
Plan.destroy_all
Plan.create!(plan_data)
