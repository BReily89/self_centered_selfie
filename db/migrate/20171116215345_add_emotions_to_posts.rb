class AddEmotionsToPosts < ActiveRecord::Migration[5.1]
  def change
    add_reference :posts, :emotions, foreign_key: true
  end
end
