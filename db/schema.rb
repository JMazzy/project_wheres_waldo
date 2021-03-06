# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20160322144951) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "characters", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "characters", ["name"], name: "index_characters_on_name", unique: true, using: :btree

  create_table "games", force: :cascade do |t|
    t.datetime "end_time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "photo_characters", force: :cascade do |t|
    t.integer  "photo_id",     null: false
    t.integer  "character_id", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.integer  "photo_x"
    t.integer  "photo_y"
  end

  add_index "photo_characters", ["photo_id", "character_id"], name: "index_photo_characters_on_photo_id_and_character_id", unique: true, using: :btree

  create_table "photos", force: :cascade do |t|
    t.string   "title"
    t.string   "link"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tags", force: :cascade do |t|
    t.integer  "photo_id",     null: false
    t.integer  "character_id", null: false
    t.integer  "photo_x"
    t.integer  "photo_y"
    t.integer  "game_id",      null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "tags", ["character_id", "photo_id"], name: "index_tags_on_character_id_and_photo_id", using: :btree
  add_index "tags", ["game_id"], name: "index_tags_on_game_id", using: :btree

end
