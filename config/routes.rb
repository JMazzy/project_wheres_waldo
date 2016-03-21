Rails.application.routes.draw do
  root "photos#show"

  resources :photos, only: [:show]
end
