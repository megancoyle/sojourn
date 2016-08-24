class AddColumnsToPlans < ActiveRecord::Migration[5.0]
  def change
    add_column :plans, :name, :string
    add_column :plans, :weather, :string
    add_column :plans, :possible_events, :string

  end
end
