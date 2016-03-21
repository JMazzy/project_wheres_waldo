class Character < ActiveRecord::Base
  has_many :tags
  has_many :photos, through: :photo_characters
  has_many :photos_tagged_in, through: :tags,
                              class_name: "Photo"
end
