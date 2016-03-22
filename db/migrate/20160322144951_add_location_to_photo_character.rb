class AddLocationToPhotoCharacter < ActiveRecord::Migration
  def change
    add_column :photo_characters, :photo_x, :integer
    add_column :photo_characters, :photo_y, :integer
  end
end
