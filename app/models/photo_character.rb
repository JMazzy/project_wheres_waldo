class PhotoCharacter < ActiveRecord::Base
  belongs_to :photo
  belongs_to :character
end
