class Post < ApplicationRecord
  belongs_to :journal 
  has_many :emotions
end
