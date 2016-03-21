class Tag < ActiveRecord::Base
  belongs_to :photo
  belongs_to :character
  belongs_to :game
end
