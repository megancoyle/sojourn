class AddColumnsToPlans < ActiveRecord::Migration[5.0]
  def change
    add_column :plans, :food, :string
    add_column :plans, :museums, :string
    add_column :plans, :outdoor_activities, :string
    add_column :plans, :neighborhoods, :string
    add_column :plans, :people_to_visit, :string
    add_column :plans, :souvenirs, :string
    add_column :plans, :landmarks, :string
  end
end
