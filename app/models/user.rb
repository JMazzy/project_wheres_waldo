class User < ActiveRecord::Base
  has_secure_password

  has_many :tags
  has_many :photos, through: :tags
  has_many :characters, through: :tags
end
