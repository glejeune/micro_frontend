defmodule ValueServiceWeb.HealthController do
  use ValueServiceWeb, :controller

  def index(conn, _params) do
    text(conn, "ok")
  end
end
