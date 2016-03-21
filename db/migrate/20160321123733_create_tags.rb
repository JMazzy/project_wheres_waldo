class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.integer :photo_id, null: false
      t.integer :character_id, null: false
      t.integer :photo_x
      t.integer :photo_y

      t.index [:character_id, :photo_id], unique: true

      t.timestamps null: false
    end
  end
end
