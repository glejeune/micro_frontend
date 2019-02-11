defmodule ValueServiceWeb.Router do
  use ValueServiceWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", ValueServiceWeb do
    pipe_through :api
  end

  get "/health", ValueServiceWeb.HealthController, :index
end
