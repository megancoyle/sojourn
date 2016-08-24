class Trip < ApplicationRecord
  has_many :details, dependent: :destroy
end
