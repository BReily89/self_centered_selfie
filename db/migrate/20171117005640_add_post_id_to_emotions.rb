class AddPostIdToEmotions < ActiveRecord::Migration[5.1]
  def change
    add_column :emotions, :post_id, :integer
  end
end
