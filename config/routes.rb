Rails.application.routes.draw do
  get "welcome/index"
  root 'welcome#index'
  root :to => redirect('/#/')
  namespace :api do
    resources :trips
  end

end
