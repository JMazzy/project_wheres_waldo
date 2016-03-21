class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.datetime :end_time

      t.timestamps null: false
    end
  end
end
