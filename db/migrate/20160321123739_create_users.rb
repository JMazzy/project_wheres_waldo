class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :user_name, null: false
      t.string :email, null: false
      t.string :password_digest
      t.string :auth_token

      t.index :user_name, unique: true
      t.index :email, unique: true

      t.timestamps null: false
    end
  end
end
