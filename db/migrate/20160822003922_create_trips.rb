class CreateTrips < ActiveRecord::Migration[5.0]
  def change
    create_table :trips do |t|
      t.string :location
      t.date :start
      t.date :end

      t.timestamps
    end
  end
end
