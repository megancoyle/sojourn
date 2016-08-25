class AddNotesToPlans < ActiveRecord::Migration[5.0]
  def change
    add_column :plans, :notes, :string

  end
end
