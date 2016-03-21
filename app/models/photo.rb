class Photo < ActiveRecord::Base
  has_many :tags
  has_many :characters, through: :photo_characters
  has_many :users, through: :tags
  has_many :tagged_characters,  through: :tags,
                                class_name: "Character"
end
