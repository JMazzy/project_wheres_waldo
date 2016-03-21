class Game < ActiveRecord::Base
  has_many :tags

  def check_win
    puts self.tags
  end
end
