class AddImageUrlToPlans < ActiveRecord::Migration[5.0]
  def change
    add_column :plans, :img_url, :string
  end
end
