class Journal < ApplicationRecord
    has_many :posts,  dependent: :destroy
end
