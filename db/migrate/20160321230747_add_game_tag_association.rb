class AddGameTagAssociation < ActiveRecord::Migration
  def change
    add_column :tags, :game_id, null: false

    add_index :tags, :game_id
  end
end
