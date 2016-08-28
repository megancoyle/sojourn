# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160828151020) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "details", force: :cascade do |t|
    t.string   "title"
    t.integer  "trip_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["trip_id"], name: "index_details_on_trip_id", using: :btree
  end

  create_table "plans", force: :cascade do |t|
    t.string "notes"
    t.string "food"
    t.string "museums"
    t.string "outdoor_activities"
    t.string "neighborhoods"
    t.string "people_to_visit"
    t.string "souvenirs"
    t.string "landmarks"
    t.string "name"
    t.string "weather"
    t.string "possible_events"
    t.string "img_url"
  end

  create_table "trips", force: :cascade do |t|
    t.string   "location"
    t.date     "start"
    t.date     "end"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "details", "trips"
end
