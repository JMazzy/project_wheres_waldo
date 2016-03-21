class Tag < ActiveRecord::Base
  belongs_to :user
  belongs_to :photo
  belongs_to :character
end
